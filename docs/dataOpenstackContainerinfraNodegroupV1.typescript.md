# `dataOpenstackContainerinfraNodegroupV1` Submodule <a name="`dataOpenstackContainerinfraNodegroupV1` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackContainerinfraNodegroupV1 <a name="DataOpenstackContainerinfraNodegroupV1" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1 openstack_containerinfra_nodegroup_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer"></a>

```typescript
import { dataOpenstackContainerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1(scope: Construct, id: string, config: DataOpenstackContainerinfraNodegroupV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config">DataOpenstackContainerinfraNodegroupV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config">DataOpenstackContainerinfraNodegroupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackContainerinfraNodegroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isConstruct"></a>

```typescript
import { dataOpenstackContainerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformElement"></a>

```typescript
import { dataOpenstackContainerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformDataSource"></a>

```typescript
import { dataOpenstackContainerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport"></a>

```typescript
import { dataOpenstackContainerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackContainerinfraNodegroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackContainerinfraNodegroupV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackContainerinfraNodegroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackContainerinfraNodegroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.dockerVolumeSize">dockerVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.flavor">flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dockerVolumeSize`<sup>Required</sup> <a name="dockerVolumeSize" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.dockerVolumeSize"></a>

```typescript
public readonly dockerVolumeSize: number;
```

- *Type:* number

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.flavor"></a>

```typescript
public readonly flavor: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackContainerinfraNodegroupV1Config <a name="DataOpenstackContainerinfraNodegroupV1Config" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.Initializer"></a>

```typescript
import { dataOpenstackContainerinfraNodegroupV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackContainerinfraNodegroupV1Config: dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#cluster_id DataOpenstackContainerinfraNodegroupV1#cluster_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#id DataOpenstackContainerinfraNodegroupV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#name DataOpenstackContainerinfraNodegroupV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#region DataOpenstackContainerinfraNodegroupV1#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#cluster_id DataOpenstackContainerinfraNodegroupV1#cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#id DataOpenstackContainerinfraNodegroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#name DataOpenstackContainerinfraNodegroupV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackContainerinfraNodegroupV1.DataOpenstackContainerinfraNodegroupV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/containerinfra_nodegroup_v1#region DataOpenstackContainerinfraNodegroupV1#region}.

---



