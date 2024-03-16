# `dataOpenstackIdentityEndpointV3` Submodule <a name="`dataOpenstackIdentityEndpointV3` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackIdentityEndpointV3 <a name="DataOpenstackIdentityEndpointV3" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3 openstack_identity_endpoint_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer"></a>

```typescript
import { dataOpenstackIdentityEndpointV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3(scope: Construct, id: string, config?: DataOpenstackIdentityEndpointV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config">DataOpenstackIdentityEndpointV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config">DataOpenstackIdentityEndpointV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetEndpointRegion">resetEndpointRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceId">resetServiceId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceType">resetServiceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEndpointRegion` <a name="resetEndpointRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetEndpointRegion"></a>

```typescript
public resetEndpointRegion(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInterface` <a name="resetInterface" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetInterface"></a>

```typescript
public resetInterface(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceId` <a name="resetServiceId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceId"></a>

```typescript
public resetServiceId(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetServiceType` <a name="resetServiceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackIdentityEndpointV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isConstruct"></a>

```typescript
import { dataOpenstackIdentityEndpointV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformElement"></a>

```typescript
import { dataOpenstackIdentityEndpointV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformDataSource"></a>

```typescript
import { dataOpenstackIdentityEndpointV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport"></a>

```typescript
import { dataOpenstackIdentityEndpointV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackIdentityEndpointV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackIdentityEndpointV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackIdentityEndpointV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackIdentityEndpointV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.endpointRegionInput">endpointRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.endpointRegion">endpointRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `url`<sup>Required</sup> <a name="url" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `endpointRegionInput`<sup>Optional</sup> <a name="endpointRegionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.endpointRegionInput"></a>

```typescript
public readonly endpointRegionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `endpointRegion`<sup>Required</sup> <a name="endpointRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.endpointRegion"></a>

```typescript
public readonly endpointRegion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackIdentityEndpointV3Config <a name="DataOpenstackIdentityEndpointV3Config" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.Initializer"></a>

```typescript
import { dataOpenstackIdentityEndpointV3 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackIdentityEndpointV3Config: dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.endpointRegion">endpointRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#endpoint_region DataOpenstackIdentityEndpointV3#endpoint_region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#id DataOpenstackIdentityEndpointV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.interface">interface</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#interface DataOpenstackIdentityEndpointV3#interface}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#name DataOpenstackIdentityEndpointV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#region DataOpenstackIdentityEndpointV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_id DataOpenstackIdentityEndpointV3#service_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_name DataOpenstackIdentityEndpointV3#service_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceType">serviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_type DataOpenstackIdentityEndpointV3#service_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointRegion`<sup>Optional</sup> <a name="endpointRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.endpointRegion"></a>

```typescript
public readonly endpointRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#endpoint_region DataOpenstackIdentityEndpointV3#endpoint_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#id DataOpenstackIdentityEndpointV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#interface DataOpenstackIdentityEndpointV3#interface}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#name DataOpenstackIdentityEndpointV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#region DataOpenstackIdentityEndpointV3#region}.

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_id DataOpenstackIdentityEndpointV3#service_id}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_name DataOpenstackIdentityEndpointV3#service_name}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@ithings/cdktf-provider-openstack.dataOpenstackIdentityEndpointV3.DataOpenstackIdentityEndpointV3Config.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/identity_endpoint_v3#service_type DataOpenstackIdentityEndpointV3#service_type}.

---



