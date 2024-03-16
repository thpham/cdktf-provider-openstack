# `dataOpenstackContainerinfraClustertemplateV1` Submodule <a name="`dataOpenstackContainerinfraClustertemplateV1` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackContainerinfraClustertemplateV1 <a name="DataOpenstackContainerinfraClustertemplateV1" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1 openstack_containerinfra_clustertemplate_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer"></a>

```typescript
import { dataOpenstackContainerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1(scope: Construct, id: string, config: DataOpenstackContainerinfraClustertemplateV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config">DataOpenstackContainerinfraClustertemplateV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config">DataOpenstackContainerinfraClustertemplateV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isConstruct"></a>

```typescript
import { dataOpenstackContainerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformElement"></a>

```typescript
import { dataOpenstackContainerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformDataSource"></a>

```typescript
import { dataOpenstackContainerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport"></a>

```typescript
import { dataOpenstackContainerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackContainerinfraClustertemplateV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackContainerinfraClustertemplateV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackContainerinfraClustertemplateV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.apiserverPort">apiserverPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.clusterDistro">clusterDistro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.coe">coe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dnsNameserver">dnsNameserver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dockerStorageDriver">dockerStorageDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dockerVolumeSize">dockerVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.externalNetworkId">externalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fixedNetwork">fixedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fixedSubnet">fixedSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.floatingIpEnabled">floatingIpEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.hidden">hidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.httpProxy">httpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.insecureRegistry">insecureRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.keypairId">keypairId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.masterFlavor">masterFlavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.masterLbEnabled">masterLbEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.networkDriver">networkDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.noProxy">noProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.registryEnabled">registryEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.serverType">serverType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.tlsDisabled">tlsDisabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.volumeDriver">volumeDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `apiserverPort`<sup>Required</sup> <a name="apiserverPort" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.apiserverPort"></a>

```typescript
public readonly apiserverPort: number;
```

- *Type:* number

---

##### `clusterDistro`<sup>Required</sup> <a name="clusterDistro" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.clusterDistro"></a>

```typescript
public readonly clusterDistro: string;
```

- *Type:* string

---

##### `coe`<sup>Required</sup> <a name="coe" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.coe"></a>

```typescript
public readonly coe: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsNameserver`<sup>Required</sup> <a name="dnsNameserver" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dnsNameserver"></a>

```typescript
public readonly dnsNameserver: string;
```

- *Type:* string

---

##### `dockerStorageDriver`<sup>Required</sup> <a name="dockerStorageDriver" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dockerStorageDriver"></a>

```typescript
public readonly dockerStorageDriver: string;
```

- *Type:* string

---

##### `dockerVolumeSize`<sup>Required</sup> <a name="dockerVolumeSize" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.dockerVolumeSize"></a>

```typescript
public readonly dockerVolumeSize: number;
```

- *Type:* number

---

##### `externalNetworkId`<sup>Required</sup> <a name="externalNetworkId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.externalNetworkId"></a>

```typescript
public readonly externalNetworkId: string;
```

- *Type:* string

---

##### `fixedNetwork`<sup>Required</sup> <a name="fixedNetwork" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fixedNetwork"></a>

```typescript
public readonly fixedNetwork: string;
```

- *Type:* string

---

##### `fixedSubnet`<sup>Required</sup> <a name="fixedSubnet" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.fixedSubnet"></a>

```typescript
public readonly fixedSubnet: string;
```

- *Type:* string

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `floatingIpEnabled`<sup>Required</sup> <a name="floatingIpEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.floatingIpEnabled"></a>

```typescript
public readonly floatingIpEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.hidden"></a>

```typescript
public readonly hidden: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `httpProxy`<sup>Required</sup> <a name="httpProxy" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

---

##### `httpsProxy`<sup>Required</sup> <a name="httpsProxy" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `insecureRegistry`<sup>Required</sup> <a name="insecureRegistry" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.insecureRegistry"></a>

```typescript
public readonly insecureRegistry: string;
```

- *Type:* string

---

##### `keypairId`<sup>Required</sup> <a name="keypairId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.keypairId"></a>

```typescript
public readonly keypairId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `masterFlavor`<sup>Required</sup> <a name="masterFlavor" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.masterFlavor"></a>

```typescript
public readonly masterFlavor: string;
```

- *Type:* string

---

##### `masterLbEnabled`<sup>Required</sup> <a name="masterLbEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.masterLbEnabled"></a>

```typescript
public readonly masterLbEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkDriver`<sup>Required</sup> <a name="networkDriver" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.networkDriver"></a>

```typescript
public readonly networkDriver: string;
```

- *Type:* string

---

##### `noProxy`<sup>Required</sup> <a name="noProxy" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.noProxy"></a>

```typescript
public readonly noProxy: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.public"></a>

```typescript
public readonly public: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `registryEnabled`<sup>Required</sup> <a name="registryEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.registryEnabled"></a>

```typescript
public readonly registryEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.serverType"></a>

```typescript
public readonly serverType: string;
```

- *Type:* string

---

##### `tlsDisabled`<sup>Required</sup> <a name="tlsDisabled" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.tlsDisabled"></a>

```typescript
public readonly tlsDisabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `volumeDriver`<sup>Required</sup> <a name="volumeDriver" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.volumeDriver"></a>

```typescript
public readonly volumeDriver: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackContainerinfraClustertemplateV1Config <a name="DataOpenstackContainerinfraClustertemplateV1Config" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.Initializer"></a>

```typescript
import { dataOpenstackContainerinfraClustertemplateV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackContainerinfraClustertemplateV1Config: dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#name DataOpenstackContainerinfraClustertemplateV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#id DataOpenstackContainerinfraClustertemplateV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#region DataOpenstackContainerinfraClustertemplateV1#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#name DataOpenstackContainerinfraClustertemplateV1#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#id DataOpenstackContainerinfraClustertemplateV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraClustertemplateV1.DataOpenstackContainerinfraClustertemplateV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_clustertemplate_v1#region DataOpenstackContainerinfraClustertemplateV1#region}.

---



